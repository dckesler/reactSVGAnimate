import React from 'react';

class Animator extends React.Component {
  constructor(props){
    this.state = {
      frame: props.passive.animations[0].frame,
    };
  }

  componentDidMount(){
    this.setUp(this.props.passive);
  }

  setUp(animation){
    this.switch = false;
    this.iterations = animation.repeat;
    this.looping = animation.looping;
    animate.call(this, animation.animations.slice());
  }

  componentWillReceiveProps(){
    this.switch = true;
  }

  render(){
    return (
      <svg style={{height: '500px', width: '500px'}}>
        {this.state.frame}
      </svg>
    );
  }
}

export { Animator };

Animator.propTypes = { animation: React.PropTypes.object };

function animate(arr, curr = 0){
  console.log(curr);
  if(this.switch){
    this.setUp(this.props.animation);
  } else {
    this.setState({
      frame: arr[curr].frame
    }, ()=>{
      if(curr === arr.length - 1){
        if(this.looping ? this.iterations -= 0.5 : --this.iterations){
          this.looping ? setTimeout(animate.bind(this, arr.reverse(), 1), arr[0].delay) : setTimeout(animate.bind(this, arr), arr[curr].delay);
        } else {
          this.setUp(this.props.passive);
        }
      }
      else {
        setTimeout(animate.bind(this, arr, curr + 1), arr[curr].delay);
      }
    });
  }
}
