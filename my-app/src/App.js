import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



var str = ["Hiee there." + " "+
  "My name."+
  "is Sam." +  " " +
   "This is my ."+ 
   "lucky  day." +  " " + 
   "I like Coding." + " " +
   "so much."+ " " +
   " . "+
   " This is it."
];

   var words = str;
  var result = "";
 
  for (var i = 0; i < words.length; i++) 
   
      var result = words[i].split('.').map(function(word, i) {
return i % 2==0  ? word : word.split("").reverse(" ").join(""); }).join(" ");
   


   


  
    
     return (
   
        <div> 
     {result}         
           </div>
    );
  }

export default App;
