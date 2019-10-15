import {Utils, Events, MediaControl, Styler, Playback, Browser, $} from 'clappr'
import liveProgramStyle from './styles.sass'

/**
 * A live stream only mediacontrol which display current program.
 * @class LiveProgramMediaControl
 * @constructor
 * @extends MediaControl
 */
export default class LiveProgramMediaControl extends MediaControl {
  constructor(core) {
    super(core)
    this._seekBarHidden = false
    this._setSeekBarHidden = !Browser.isiOS // Fix seekbar scrubber on iPhone
    this._leftPanelWidth = 0
    this._rightPanelWidth = 0
    this._liveProgramLeft = 0
    this._liveProgramWidth = 0

    let pluginOpts = this.options.liveProgramMediaControl
    this._setProgram(pluginOpts.program)
    this._progressColor = pluginOpts && pluginOpts.progressColor || null
    this._paddingWidth = pluginOpts && pluginOpts.paddingWidth || 18
  }

  _setProgram(program) {
    !program && (program = {})
    this._program = {}
    this._program.title = program.title || ''
    this._program.startAt = program.startAt || '00:00'
    this._program.endAt = program.endAt || '00:00'
    this._program.progress = program.progress || 0
  }

  // get isLiveWithoutDVR() {
  //   return this.container && this.container.getPlaybackType() === Playback.LIVE && !this.container.isDvrInUse()
  // }

  resizeLiveProgram(size) {
    if (!this.$liveProgram) {
      return
    }

    // Get left mediacontrol panel width (with fixed padding)
    const lpw = this.$leftPanel.width()
    if (lpw > 0) {
      this._leftPanelWidth = lpw + this._paddingWidth
    }

    // Get right mediacontrol panel width (with fixed padding)
    const rpw = this.$rightPanel.width()
    if (rpw > 0) {
      this._rightPanelWidth = rpw + this._paddingWidth
    }

    // Calculate live program bar position and width
    const layerWidth = this.$layer.width()
    if (layerWidth > 0 && this._leftPanelWidth > 0) {
      const w = layerWidth - this._leftPanelWidth - this._rightPanelWidth
      if (w > 0) {
        this._liveProgramLeft = this._leftPanelWidth
        this._liveProgramWidth = w
      }
    }

    // Update live program bar
    if (this._liveProgramLeft > 0 && this._liveProgramWidth > 0 && this._liveProgramWidth !== this.$liveProgram.width()) {
      this.$liveProgram.css({left: `${this._liveProgramLeft}px`, width: `${this._liveProgramWidth}px`})
    }
  }

  renderLiveProgramBar() {
    // Live program bar is rendered only if playback is live without DVR
    // if (!this.isLiveWithoutDVR) {
    //   return
    // }

    this.$layer = this.$el.find('.media-control-layer')

    this.$progressBar = $("<div />").addClass("live-program-progress-bar").attr('data-media-control', '')
    this.$progressBarBg = $("<div />").addClass("live-program-progress-bar-bg").attr('data-media-control', '')
    this.$progressBarFill = $("<div />").addClass("live-program-progress-bar-fill").attr('data-media-control', '')

    this._progressColor && this.$progressBarFill.css({'background-color': this._progressColor})

    this.$progressBar.append(this.$progressBarBg)
    this.$progressBar.append(this.$progressBarFill)

    this.$liveProgramBar = $("<div />").addClass("live-program-bar").attr('data-media-control', '')
    this.$liveProgramBar.append(this.$progressBar)

    this.$startAt = $("<div />").addClass("live-program-start").attr('data-media-control', '')
    this.$endAt = $("<div />").addClass("live-program-end").attr('data-media-control', '')

    this.$liveProgram = $("<div />").addClass("live-program").attr('data-media-control', '')
    this.$liveProgram.append(this.$startAt)
    this.$liveProgram.append(this.$liveProgramBar)
    this.$liveProgram.append(this.$endAt)

    this.$el.find('.media-control-center-panel[data-media-control]').append(this.$liveProgram)
    this.$el.append(Styler.getStyleFor(liveProgramStyle))

    this.$leftPanel = this.$el.find('.media-control-left-panel[data-media-control]')
    this.$rightPanel = this.$el.find('.media-control-right-panel[data-media-control]')

    this.updateLiveProgram()
  }

  /**
   * Update current program.
   * @method setLiveProgram
   * @param {Object} program the program data.
   * @return {LiveProgramMediaControl} itself
   */
  setLiveProgram(program) {
    this._setProgram(program)
    this.updateLiveProgram()
    return this
  }

  updateLiveProgram() {
    if (!this.$liveProgram || !this._program) {
      return
    }

    this.$startAt.html(this._program.startAt)
    this.$progressBarFill.css({width: this._program.progress+'%'})
    this.$endAt.html(this._program.endAt)
    this.$liveProgram.attr('title', this._program.title)

    // Bar is not displayed if program title is unavailable
    if (this._program.title.length === 0) {
      this.$liveProgram.hide()
    } else {
      this.$liveProgram.show()
    }
  }

  // @override
  bindEvents() {
    super.bindEvents()
    this.listenTo(this.core, Events.CORE_FULLSCREEN, (evt) => {
      // Ensure resizeLiveProgram() is called after browser entered
      // or exited fullscreen mode
      process.nextTick(() => {
        this.resizeLiveProgram()
      })
    })
  }

  // @override
  updateVolumeUI() {
    super.updateVolumeUI()
    if (!this.rendered) {
      return
    }
    this.resizeLiveProgram()
  }

  // @override
  changeTogglePlay() {
    super.changeTogglePlay()
    this.resizeLiveProgram()
  }

  // @override
  highDefinitionUpdate(isHD) {
    super.highDefinitionUpdate(isHD)
    this.resizeLiveProgram()
  }

  // @override
  playerResize(size) {
    super.playerResize(size)
    this.resizeLiveProgram(size)
  }

  // @override
  updateProgressBar(progress) {
    if (this._seekBarHidden) {
      return
    }
    super.updateProgressBar(progress)
  }

  // @override
  renderSeekBar() {
    if (this._seekBarHidden) {
      return
    }
    // Hide default seek bar if playback is live without DVR
    // if (this.isLiveWithoutDVR) {
      this.$seekBarScrubber.hide()
      this.$seekBarContainer.hide()
      this.resizeLiveProgram()
      this._seekBarHidden = this._setSeekBarHidden
    // } else {
    //   super.renderSeekBar()
    // }
  }

  // @override
  render() {
    super.render()
    this._seekBarHidden = false
    this.renderLiveProgramBar()

    return this
  }
}
