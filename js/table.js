function cleantable() {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cellElement = document.getElementById(`cell-${i}-${j}`);
      cellElement.innerHTML = "";      
    }
  }
}
