function addNumbers(): void {


    const units : NodeListOf<HTMLInputElement> = document.getElementsByName("Unit Price") as NodeListOf<HTMLInputElement>;
    const quantities : NodeListOf<HTMLInputElement> = document.getElementsByName("Quantity") as NodeListOf<HTMLInputElement>;
    


        const output1 = document.getElementById("payment") as HTMLInputElement;
        const output2 = document.getElementById("discounted") as HTMLInputElement;
        let sum: number = 0;

        for (let i = 0; i < units.length; i++) {
            const unitPrice = parseFloat(units[i].textContent || "0");
            const quantity = parseFloat(quantities[i].textContent || "0");
            sum += unitPrice * quantity;

        output1.innerText = sum.toString();
        output2.innerText = (sum * 0.75).toString(); // Assuming a 10% discount for demonstration
           console.log(sum);
        }
        

    


}

document.getElementById("Calculate-total()")?.addEventListener("click", addNumbers);