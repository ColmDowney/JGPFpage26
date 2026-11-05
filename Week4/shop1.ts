function addNumbers(): void {  
  const quantities: NodeListOf<HTMLInputElement> = document.querySelectorAll("[name='quantity']");

  console.log('Units: $[units.length, Qauntities: $[quantities.length]');
  const output1 = document.getElementById("payment") as HTMLInputElement | null;
  const output2 = document.getElementById("discount") as HTMLInputElement | null;

  for (let i = 0; i < units.length; i++) {
    const unitPrice = parseFloat(units[i].textContent || "0");
    const quantity = parseFloat(quantities[i].textContent || "0");
  
    let sum: number = unitPrice * quantity;
    console.log('Unit Price: $[{unityPrice}] Quantity: [{quantity}] Sum: [{sum}]');

    output1.value = sum.toString();
    output2.value = (sum * 0.75).toString(); // Applying a 25% discount
  }
}
document.getElementById("calculate_total")?.addEventListener('click', addNumbers);