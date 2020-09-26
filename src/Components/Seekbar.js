import React from 'react';
function SeekBar(props) {
  const { player, duration, currentTime } = props

  const handleChange = (e) => {
    console.log(e)
    player.seekTo(e)
    this._onChangeUsed = true
  }

  const playPause = () => {
    const playerState = player.getPlayerState() 
    if (playerState === 1) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  return (
    <div id="seekbar">
      <input
        type="range"
        step="1"
        max={duration}
        value={currentTime}
        onChange={e => handleChange(e)}
        style={{
          backgroundSize: currentTime * 100 / duration + '% 100%',
        }}
      />
      <button onClick={e=>playPause()}></button>
    </div>
    )
}

export default SeekBar;