// Name: ReadLyrics
// ID: readlyricssamuellouf
// Description: Read Songs Lyrics and return them as JSON.
// By: SamuelLouf <https://github.com/samuellouf/>

(function (Scratch) {
  "use strict";

  function readLyrics(lrc){
  	var result = {};
    var lines = lrc.split('\n');
    
    var i = 0;
    
    for (i in lines){
    	var selected_line = lines[i];
      if (typeof selected_line == 'string'){
        var selected_line_split_brackets = selected_line.split(']');
        if (selected_line_split_brackets[selected_line_split_brackets.length - 1] == ''){
        	var selected_line_split = selected_line.split(':');
          result[selected_line_split[0].replace('[', '').replace(']', '')] = selected_line.split(selected_line_split[0].replace('[', '').replace(']', '') + ':')[1].replace('[', '').replace(']', '');
        } else {
          result[selected_line_split_brackets[0].replace('[', '')] = selected_line_split_brackets[1];
        }
      }
    }
    
    return result;
  }

  class ReadLyrics {
    getInfo() {
      return {
        id: "readlyricssamuellouf",
        name: "ReadLyrics",
        blocks: [
          {
            opcode: "read",
            blockType: Scratch.BlockType.REPORTER,
            text: "read [lyrics]",
            arguments: {
              lyrics: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
        ],
      };
    }
    
    read(args) {
      return JSON.stringify(readLyrics(args.lyrics));
    }
  }

  Scratch.extensions.register(new ReadLyrics());
})(Scratch);
