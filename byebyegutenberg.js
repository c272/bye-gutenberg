//Dependencies.
const fs = require('fs');

//Opening text file.
console.log("Reading file...")
var ss = fs.readFileSync('./CompleteWorksofShakespeare.txt', 'utf8');

//Looping through words to find Project Gutenberg disclaimers.
var hcount = 0;
for (i=0; i<ss.length; i++) {
    //Start of header?
    if (ss.charAt(i)=="<" && ss.charAt(i+1)=="<") {
        hcount++;
        console.log("Deleting header, count "+hcount+".");
        var done = false;
        var k = i;
        var j = i;
        while (!done) {
            //Looping till end of header.
            if (ss.charAt(j)==">" && ss.charAt(j+1)==">") {
                done = true;
                j++;
            }
            j++;
        }

        //Getting the substrings around the header.
        var beforeHeader = ss.substring(0,k);
        var afterHeader = ss.substring(j);
        //Concatenating.
        ss = beforeHeader+afterHeader;
    }
}

//Finished, saving to file.
fs.writeFileSync('./CompleteWorksofShakespeare-Clean.txt', ss);
console.log("Process complete.");