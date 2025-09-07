 let count = 0;
        // increase count button
        function increaseCount() {
            if (count < 20) { 
               count++;
              document.getElementById('count').innerHTML = count;
            } else {
             alert (`You have reached the maximum count of ${count}`);
           }
             
        }

        // decrease count button
        function decreaseCount() {
           if (count > 0) { 
             count--;
            document.getElementById('count').innerHTML = count;
           } 
        } 

    //    reset count button
        function resetCount() {
            count = 0; 
            document.getElementById('count').innerHTML = count;
        }
  
    //    increase count every 5 seconds
    setInterval(() => {
        if (count < 20) {
            count++;
            document.getElementById('count').innerHTML = count;
        } else {
            alert(`You have reached the maximum count of ${count}`);
        }
    }, 5000);

    // decrease count every 5 seconds 
    // setInterval(() => {
    //     if (count > 0) { 
    //          count--;
    //         document.getElementById('count').innerHTML = count;
    //        } 
        
    // }, 5000);


    function setTheme(theme) {
        // Add or remove the
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }

    document.getElementById("themeToggleButton").addEventListener("click", () => {
        const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    setTheme(localStorage.getItem('theme') || 'light'); 

//    let myName = '';
//    myName = prompt("What is your name", myName);
//    alert(`Your name is ${myName}`);

   confirm("Why are you sad?");
   alert('i am not happy')
