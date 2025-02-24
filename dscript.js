
        function generateValues() {
            let num1 = Math.round(Math.random() * 20);
            let num2 = Math.round(Math.random() * 20);
            let num3 = Math.round(Math.random() * 20);

            let largest = Math.max(num1, num2, num3);
            
            let alphabet = "abcdefghijklmnopqrstuvwxyz";
            let letter = num1 > 0 && num1 <= 26 ? alphabet[num1 - 1] : "(out of range)";
            
            let totalMinutes = Math.pow(num2, 2) * num3;
            let hours = Math.floor(totalMinutes / 60);
            let minutes = totalMinutes % 60;
            
            document.getElementById("output").innerHTML = `
                <div class="box">Current Power:  
			<div class="box">Allied Spaceships (per thousand): ${num1}</div> 
			<div class="box">Local Spaceships (per thousand): ${num2}</div>
			<div class="box">Enemy Spaceships (per thousand): ${num3}</div> 
		</div>
                <div class="box">Power of most Powerful unit:  ${largest}</div>
                <div class="box">Strongest Spaceship Unit:  ${letter}</div>
                <div class="box">Battle took place for:  ${totalMinutes} mins (${hours} hr ${minutes} mins)</div>
            `;
        }