function addNumbers(): void {  
  const units: NodeListOf<HTMLTableCellElement> = document.getElementByName("unit-price") as NodeListOf<HTMLTableCellElement>;
  const quantities: NodeListOf<HTMLInputElement> = document.getElementByName("quantity") as NodeListOf<HTMLInputElement>;

  console.log('Units: $[units.length, Qauntities: $[quantities.length]');
  const output1 = document.getElementById("payment") as HTMLInputElement;
  const output2 = document.getElementById("discount") as HTMLInputElement;
let sum: number = 0;

  for (let i = 0; i < units.length; i++) {
    const unitPrice = parseFloat(units[i].textContent || "0");
    const quantity = parseFloat(quantities[i].textContent || "0");
  
     sum += unitPrice * quantity;
    
    }
    output1.innerText = sum.toString();
    output2.innerText = (sum * 0.75).toString(); // Applying a 25% discount
    console.log(sum);
}
document.getElementById("calculate_total")?.addEventListener('click', addNumbers);