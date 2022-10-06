// let user = { name: "John", years: 30 };

// let{name, years: age, isAdmin = false}= user;


// alert( name ); 
// alert( age ); 
// alert( isAdmin ); 
/*-----------------------------------------------------*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries){
        let maxSal=0;
        let maxName="";
        for(let[name,salary] of Object.entries(salaries)){
            if(maxSal < salary){
                maxSal = salary;
                maxName = name;
            }
            console.log(MaxName)
        }

        topSalary(salaries)
  }