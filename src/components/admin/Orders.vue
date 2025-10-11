<template>
  <section class="orders">
    <h3>Current Orders</h3>

    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Item</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Price(total)</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Margherita</td>
          <td>9"</td>
          <td>2</td>
          <td>$15.90</td>
          <td><button><img src="../../assets/images/trash.svg" alt="trash icon"></button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.orders {
  overflow-x: auto;
  
}

table {
  min-width: 550px;
}

th,
td {
  text-align: center;
}


button {
  border: none;
  
}

</style>