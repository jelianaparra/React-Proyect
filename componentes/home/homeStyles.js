import { StyleSheet } from "react-native";

let vistaStyles = StyleSheet.create({

  root: {

    height: '100%',

  },

  view: {

    justifyContent: "center", 
    alignSelf: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    flex: 1, 
    maxWidth: '100%', 
    width: '100%',
    display: 'flex',

  },

  button: {

    margin: 'auto',  
    maxWidth: "100%", 
    width: 'auto'

  }, 

  image: {

    flex: 1,
    justifyContent: "center"

  }

});

let htmlStyles = {

  h3: {

    color: 'white', 
    textAlign: 'center', 
    borderBottom: '1px solid white', 
    margin: 'auto', 
    width: '100%', 
    fontFamily: 'Arial'

  }

}

export default { vistaStyles, htmlStyles };