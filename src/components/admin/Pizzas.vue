<template>
  <h3>Menu</h3>
  <table>
    <thead>
      <tr>
        <th>Pizza</th>
        <th>remove</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Margherita</td>
        <td><button>
          <img src="../../assets/images/trash.svg" alt="trash icon">
        </button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

th, td{
  padding: .5em;
  text-align: center;
  border-bottom: solid 1px rgb(72, 72, 72);

}
th{
  font-size: 1.1rem;
  font-weight: 600;
}
button{
  border: none;
}

</style>