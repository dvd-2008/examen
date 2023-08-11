    import React, { Component } from 'react';


    class NumeroPrimo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        maxPrime: 10, 
        primeNumbers: this.generatePrimeNumbers(10), 
        };
    }

    
    generatePrimeNumbers(max) {
        const primes = [];
        const isPrime = new Array(max + 1).fill(true);

        for (let p = 2; p * p <= max; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= max; i += p) {
            isPrime[i] = false;
            }
        }
        }

        for (let p = 2; p <= max; p++) {
        if (isPrime[p]) {
            primes.push(p);
        }
        }

        return primes;
    }

    
    updateMaxPrime = (increment) => {
        this.setState((prevState) => {
        const newMaxPrime = prevState.maxPrime + increment;
        return {
            maxPrime: newMaxPrime > 1 ? newMaxPrime : 1,
            primeNumbers: this.generatePrimeNumbers(newMaxPrime),
        };
        });
    };

    render() {
        const { primeNumbers, maxPrime } = this.state;

        return (
        <div className='container'>
        <div className='row'>
            <p className='lead fs-2 text-primary'>Números primos</p>
            <div className='col col-3 border border-2 border-primary me-2 mt-3 p-2 alert alert-warning'>
            <ul className='lead fs-2 text-primary'>
                {primeNumbers.map((prime) => (
                <li key={prime}>{prime}</li>
                ))}
            </ul>
            <div className='alert alert-danger'>
                <button className='btn btn-info me-2'  onClick={() => this.updateMaxPrime(-10)}>
                Decrementar
                </button>
                <button className='btn btn-danger' onClick={() => this.updateMaxPrime(10)}>
                Incrementar
                </button>
            </div>
            </div>
            <div className='alert alert-warning shadow p-3 mb-5 
                bg-white rounded'>
            <p className='lead fs-1 text-primary'>Mostrando primeros  {maxPrime} números naturales</p>
            <p className='lead fs-1 text-primary'> de los cuales los mostrados en la lista son  primos.</p>
            </div>
            </div>
            </div>
        );
    }
    }

    export default NumeroPrimo;
