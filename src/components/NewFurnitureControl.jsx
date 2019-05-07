import React from 'react';
import ConfirmationQuestions from './ConfirmationQuesions';
import NewFurnitureForm from './NewFurnitureForm';
import PropTypes from 'prop-types';

class NewFurnitureControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewFurnitureForm onNewFurnitureCreation={this.props.onNewFurnitureCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewFurnitureControl.propTypes = {
    onNewFurnitureCreation: PropTypes.func
};

export default NewFurnitureControl;