

function sortTable(header) {

    let table = document.getElementById("statisticsTable");
    var rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
    switching = true;
    dir = "asc";

    if (header == 0) {
        //sort the rows by the months, not by numbers

        let months = [january, february, march, april, may, june, july, august, september, october, november, december]
        

        while (switching) {

            switching = false; 
            rows = table.rows; //gets the rows from the table

            for (i = 1; i < (rows.length - 1); i++) {   //goes through all the rows to check if any are not sorted
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[header];  //get the contents of the table entries
                y = rows[i + 1].getElementsByTagName("TD")[header];

                for (check = 0; check <= months.length; check ++){  //converts X and Y into numbers from their contents
                    if (x.innerHTML.toLowerCase() == months[check]) {
                        x = check;
                    }
                    if (y.innerHTML.toLowerCase() == months[check]){
                        y = check;
                    }
                }



                if (dir == "asc") {   //check for discrepency in ascending rder
                    if (x > y) {
                  
                    shouldSwitch = true;
                    break;
                    }

                } else if (dir == "desc") { //check for discrepency in descending order
                    if (x < y) {
                    
                    shouldSwitch = true;
                    break;
                        }

                }   

            }

        
        if (shouldSwitch) {       
          
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchCount ++;
            switching = true;

          } else if (switchCount == 0 && dir == "asc") {   // If no switching has been done AND the direction is "asc",set the direction to "desc" and run the while loop again. 
              dir = "desc";
              switching = true;
            }
            else {
                switching = false;
            }
        }




    } 
    else {

        while (switching) {

            switching = false; 
            rows = table.rows; //gets the rows from the table

            for (i = 1; i < (rows.length - 1); i++) {   //goes through all the rows to check if any are not sorted
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[header];  //get the contents of the table entries
                y = rows[i + 1].getElementsByTagName("TD")[header];



                if (dir == "asc") {   //check for discrepency in ascending rder
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  
                    shouldSwitch = true;
                    break;
                    }

                } else if (dir == "desc") { //check for discrepency in descending order
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    
                    shouldSwitch = true;
                    break;
                        }

                }   

            }

        
        if (shouldSwitch) {       
          
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchCount ++;
            switching = true;

          } else if (switchCount == 0 && dir == "asc") {   // If no switching has been done AND the direction is "asc",set the direction to "desc" and run the while loop again. 
              dir = "desc";
              switching = true;
            }
            else {
                switching = false;
            }
        }

 }
}