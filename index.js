module.exports = {
    /**
     * Suma de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} valor1 Primer número de la suma
     * @param {*} valor2 Segundo número de la suma
     */
    suma: function (valor1, valor2) {
        return valor1 + valor2;
    },
    /**
     * Resta de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado -2
     * @param {*} valor1 Primer número de la resta
     * @param {*} valor2 Segundo número de la resta
     */
    resta: function (valor1, valor2) {
        return valor1 - valor2;
    },
    /**
     * Multiplicación de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado 3
     * @param {*} valor1 Primer número de la multiplicación
     * @param {*} valor2 Segundo número de la multiplicación
     */
    multiplicacion: function (valor1, valor2) {
        return valor1 * valor2;
    },
    /**
     * División de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado 0.33
     * @param {*} valor1 Primer número de la división
     * @param {*} valor2 Segundo número de la división
     */
    division: function (valor1, valor2) {
        return valor1 / valor2;
    }
};