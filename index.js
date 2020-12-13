module.exports = {
    /**
     * Suma de 2 números
     * @example
     * valor1 = 1, valor2 = 3 => resultado 4
     * @param {*} valor1 Primer número de la suma
     * @param {*} valor2 Segundo número de la suma
     */
    suma: function (valor1, valor2) {
        return (this.esNumero(valor1, valor2) ?  valor1 + valor2: this.mensajeError());
    },
    /**
     * Resta de 2 números
     * @example
     * valor1 = 1, valor2 = 3 => resultado -2
     * @param {*} valor1 Primer número de la resta
     * @param {*} valor2 Segundo número de la resta
     */
    resta: function (valor1, valor2) {
        return (this.esNumero(valor1, valor2) ?  valor1 - valor2: this.mensajeError());
    },
    /**
     * Multiplicación de 2 números
     * @example
     * valor1 = 1, valor2 = 3 => resultado 3
     * @param {*} valor1 Primer número de la multiplicación
     * @param {*} valor2 Segundo número de la multiplicación
     */
    multiplicacion: function (valor1, valor2) {
        return (this.esNumero(valor1, valor2) ?  valor1 * valor2: this.mensajeError());
    },
    /**
     * División de 2 números
     * @example
     * valor1 = 1, valor2 = 3 => resultado 0.33
     * @param {*} valor1 Primer número de la división
     * @param {*} valor2 Segundo número de la división
     */
    division: function (valor1, valor2) {
        return (this.esNumero(valor1, valor2) ?  valor1 / valor2: this.mensajeError());
    },
    /**
     * Mensaje de error que se muestra cuando alguno de los valores no sea numérico
     */
    mensajeError: function () {
        console.log('Un valor o los dos no son numéricos');
    },
    /**
     * Valida si los 2 valores son números
     * @example
     * valor1 = 'hola, valor2 = 10 => resultado false
     * valor1 = 5, valor2 = 10 => resultado true
     * @param {*} valor1 Primero valor a validar
     * @param {*} valor2 Segundo valor a validar
     */
    esNumero: function (valor1, valor2) {
        if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
            return false;
        }
        return true;
    }
};