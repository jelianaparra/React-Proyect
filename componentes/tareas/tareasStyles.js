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

  input: {

    padding: 10,
    height: 35 + 'px',
    backgroundColor: '#9DC4FD',
    borderBottomWidth: 1.5 + 'px',
    borderBottomColor: '#ffffff',
    marginBottom: 30 + 'px',
    width: 100 + '%'

  },

  button: {

    margin: 'auto',  
    maxWidth: "100%", 
    width: 'auto',
    borderColor: 'white'

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

  },

  form: {

    width: '90%',
    margin: 'auto'

  },

}

export default { vistaStyles, htmlStyles };