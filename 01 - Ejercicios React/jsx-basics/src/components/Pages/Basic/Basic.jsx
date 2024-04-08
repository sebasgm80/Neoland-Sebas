export function getSaludo(hora) {

if (hora >= 6 && hora < 12) {
    return <p>Buenos dias</p>;
} else if (hora >= 12 && hora < 20) {
    return <p>Buenas tardes</p>;
} else {
    return <p>Buenas noches</p>;
}
}
