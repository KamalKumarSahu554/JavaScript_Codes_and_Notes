const company1 = {
  employe: "Kamal",
  posision: "executive",
  work: function hisWork() {
    console.log(
      `Companny1 employe ${company1.employe} working as a ${this.posision} posision.`
    );
    // console.log(company1);
  },
};

function print() {
  console.log(
    `Companny1 employe ${this.employe} working as a ${company1.posision} posision.`
  );
}
print();
const company2 = {
  employe: "Raman",
  posision: "Non-executive",
  work: function hisWork() {
    console.log(
      `Companny2 employe ${this.employe} working as a ${this.posision} posision.`
    );
    // console.log(this);
  },
};

// company1.work();
// company2.work();
