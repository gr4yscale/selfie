import GL from 'gl-react'
import React, {Component} from 'react'
const {Surface} = require('gl-react-native')

const shaders = GL.Shaders.create({
  blackWhiteTrip: {
    frag: `
precision highp float;
varying vec2 uv;
uniform float time;

//uniform vec2 resolution;
float pi = 3.1415926535897932384626433832795028841;

float sin1(float val) {
  return ((sin((val*2.)-1.5)/2.)+0.5);
}

float strobes(float val) {
	//return step(0.5,fract(val*8.));
	return pow(sin1(val*pi*8.),10.)*6000.;
}

void main () {
  float ourtime = (time);

  vec2 position = ( gl_FragCoord.xy / vec2(800.0, 1200.0));

  //vec2 newUV = uv;
  // newUV.y = (uv.y + sin(ourtime * 2.0));
  // newUV.y = (uv.y + ourtime);

  float swirla2 = (1.-length(abs(uv-0.5)-50.))*5.;
  float swirl2 = clamp(strobes(swirla2-ourtime),0.,1.);

  gl_FragColor = vec4(vec3(swirl2), 1.0);
}
    `,
  },
});

class BlackWhiteTripShader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0.0,
    }
  }

  componentDidMount () {
    let updateVal = this.props.animate ? 0.005 : 0.0
    const loop = () => {
      this.raf = requestAnimationFrame(loop) //eslint-disable-line no-undef
      this.setState({
        value: parseFloat(this.state.value + updateVal),
      })
    }
    this.raf = requestAnimationFrame(loop) //eslint-disable-line no-undef
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.raf) //eslint-disable-line no-undef
  }

  render () {
    const { value } = this.state;
    const { width, height } = this.props;

    return (
    <Surface
        width={width} height={height}
        pixelRatio={2}
        opaque={true}
        ref="blackWhiteTrip"
        style={{position:'absolute', width, height, top:0, left: 0}}
    >
        <GL.Node
            shader={shaders.blackWhiteTrip}
            uniforms={{ time: value }}
        />
    </Surface>
    )
  }
}

module.exports = BlackWhiteTripShader;
