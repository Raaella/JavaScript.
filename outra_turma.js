function selecionarTurma() {
    const selectTurma = document.getElementById("turma");
    const inputOutraTurma = document.getElementById("outraTurma");
    const labelTurma = document.querySelector("label[for='turma']");
    const labelOutraTurma = document.querySelector("label[for='outraTurma']");

    if (selectTurma.value === "personalizada") {
        selectTurma.styles.display = "none";
        labelTurma.styles.display = "none";
        inputOutraTurma.styles.display = "block";
        labelOutraTurma.styles.display = "block";
        inputOutraTurma.styles.display = "0";

    } else {
        inputOutraTurma.styles.display = "none";
        labelOutraTurma.styles.display = "none";
        selectTurma.styles.display = "block";
        labelTurma.styles.display = "block";
    }
}