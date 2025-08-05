'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'

export default function CalciVerse() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)
  const [memory, setMemory] = useState(0)
  const [isRadian, setIsRadian] = useState(true)
  const [history, setHistory] = useState<string[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const displayRef = useRef<HTMLDivElement>(null)

  // High precision calculation with 15 decimal places
  const formatNumber = useCallback((num: number): string => {
    if (isNaN(num) || !isFinite(num)) {
      return 'Error'
    }
    
    // Handle very large or very small numbers with scientific notation
    if (Math.abs(num) >= 1e15 || (Math.abs(num) < 1e-10 && num !== 0)) {
      return num.toExponential(10)
    }
    
    // Format with up to 15 significant digits
    const str = num.toPrecision(15)
    const formatted = parseFloat(str).toString()
    
    // Remove unnecessary trailing zeros
    if (formatted.includes('.')) {
      return formatted.replace(/\.?0+$/, '')
    }
    
    return formatted
  }, [])

  const addToHistory = useCallback((calculation: string) => {
    setHistory(prev => [calculation, ...prev.slice(0, 9)]) // Keep last 10 calculations
  }, [])

  const handleNumber = useCallback((num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      if (display === '0' || display === 'Error') {
        setDisplay(num)
      } else {
        setDisplay(display + num)
      }
    }
  }, [display, waitingForNewValue])

  const handleDecimal = useCallback(() => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }, [display, waitingForNewValue])

  const clear = useCallback(() => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }, [])

  const clearEntry = useCallback(() => {
    setDisplay('0')
    setWaitingForNewValue(false)
  }, [])

  const handleOperation = useCallback((nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      let result: number

      switch (operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '×':
          result = currentValue * inputValue
          break
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : NaN
          break
        case '^':
          result = Math.pow(currentValue, inputValue)
          break
        case 'mod':
          result = currentValue % inputValue
          break
        default:
          return
      }

      const formattedResult = formatNumber(result)
      addToHistory(`${currentValue} ${operation} ${inputValue} = ${formattedResult}`)
      setDisplay(formattedResult)
      setPreviousValue(result)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }, [display, previousValue, operation, formatNumber, addToHistory])

  const calculate = useCallback(() => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const currentValue = previousValue
      let result: number

      switch (operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '×':
          result = currentValue * inputValue
          break
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : NaN
          break
        case '^':
          result = Math.pow(currentValue, inputValue)
          break
        case 'mod':
          result = currentValue % inputValue
          break
        default:
          return
      }

      const formattedResult = formatNumber(result)
      addToHistory(`${currentValue} ${operation} ${inputValue} = ${formattedResult}`)
      setDisplay(formattedResult)
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }, [display, previousValue, operation, formatNumber, addToHistory])

  const handleScientificFunction = useCallback((func: string) => {
    const inputValue = parseFloat(display)
    let result: number

    switch (func) {
      case 'sin':
        result = Math.sin(isRadian ? inputValue : inputValue * Math.PI / 180)
        break
      case 'cos':
        result = Math.cos(isRadian ? inputValue : inputValue * Math.PI / 180)
        break
      case 'tan':
        result = Math.tan(isRadian ? inputValue : inputValue * Math.PI / 180)
        break
      case 'asin':
        result = Math.asin(inputValue)
        if (!isRadian) result = result * 180 / Math.PI
        break
      case 'acos':
        result = Math.acos(inputValue)
        if (!isRadian) result = result * 180 / Math.PI
        break
      case 'atan':
        result = Math.atan(inputValue)
        if (!isRadian) result = result * 180 / Math.PI
        break
      case 'log':
        result = Math.log10(inputValue)
        break
      case 'ln':
        result = Math.log(inputValue)
        break
      case 'sqrt':
        result = Math.sqrt(inputValue)
        break
      case 'cbrt':
        result = Math.cbrt(inputValue)
        break
      case 'exp':
        result = Math.exp(inputValue)
        break
      case '1/x':
        result = 1 / inputValue
        break
      case 'x²':
        result = inputValue * inputValue
        break
      case 'x³':
        result = inputValue * inputValue * inputValue
        break
      case '±':
        result = -inputValue
        break
      case 'abs':
        result = Math.abs(inputValue)
        break
      case 'factorial':
        if (inputValue < 0 || !Number.isInteger(inputValue) || inputValue > 170) {
          result = NaN
        } else {
          result = 1
          for (let i = 2; i <= inputValue; i++) {
            result *= i
          }
        }
        break
      default:
        return
    }

    const formattedResult = formatNumber(result)
    addToHistory(`${func}(${inputValue}) = ${formattedResult}`)
    setDisplay(formattedResult)
    setWaitingForNewValue(true)
  }, [display, isRadian, formatNumber, addToHistory])

  const handleConstant = useCallback((constant: string) => {
    let value: number
    switch (constant) {
      case 'π':
        value = Math.PI
        break
      case 'e':
        value = Math.E
        break
      default:
        return
    }
    
    const formattedValue = formatNumber(value)
    setDisplay(formattedValue)
    setWaitingForNewValue(true)
  }, [formatNumber])

  const handleMemory = useCallback((action: string) => {
    const currentValue = parseFloat(display)
    
    switch (action) {
      case 'MC':
        setMemory(0)
        break
      case 'MR':
        setDisplay(formatNumber(memory))
        setWaitingForNewValue(true)
        break
      case 'M+':
        setMemory(memory + currentValue)
        break
      case 'M-':
        setMemory(memory - currentValue)
        break
      case 'MS':
        setMemory(currentValue)
        break
    }
  }, [display, memory, formatNumber])

  const handleBackspace = useCallback(() => {
    if (display.length > 1 && display !== 'Error') {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }, [display])

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event
      
      if (key >= '0' && key <= '9') {
        handleNumber(key)
      } else if (key === '.') {
        handleDecimal()
      } else if (key === '+' || key === '-') {
        handleOperation(key === '+' ? '+' : '-')
      } else if (key === '*') {
        handleOperation('×')
      } else if (key === '/') {
        event.preventDefault()
        handleOperation('÷')
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault()
        calculate()
      } else if (key === 'Escape') {
        clear()
      } else if (key === 'Backspace') {
        handleBackspace()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNumber, handleDecimal, handleOperation, calculate, clear, handleBackspace])

  return (
    <div className="max-w-6xl mx-auto bg-charcoal rounded-xl border border-smoke p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">CalciVerse</h2>
        <p className="text-light-gray">High-precision scientific calculator with 15-digit accuracy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calculator Display and Controls */}
        <div className="lg:col-span-2">
          {/* Display */}
          <div className="bg-smoke rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setIsRadian(!isRadian)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isRadian 
                      ? 'bg-electric-lime text-charcoal' 
                      : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                  }`}
                >
                  {isRadian ? 'RAD' : 'DEG'}
                </button>
                <div className="text-xs text-light-gray self-center">
                  Memory: {formatNumber(memory)}
                </div>
              </div>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-xs"
              >
                History
              </button>
            </div>
            
            <div
              ref={displayRef}
              className="bg-charcoal rounded p-4 text-right text-white text-2xl font-mono min-h-16 flex items-center justify-end break-all"
              style={{ wordBreak: 'break-all' }}
            >
              {display}
            </div>
          </div>

          {/* Calculator Buttons */}
          <div className="grid grid-cols-6 gap-2">
            {/* Row 1 - Functions */}
            <button onClick={() => handleScientificFunction('sin')} className="btn-function">sin</button>
            <button onClick={() => handleScientificFunction('cos')} className="btn-function">cos</button>
            <button onClick={() => handleScientificFunction('tan')} className="btn-function">tan</button>
            <button onClick={() => handleScientificFunction('ln')} className="btn-function">ln</button>
            <button onClick={() => handleScientificFunction('log')} className="btn-function">log</button>
            <button onClick={() => handleScientificFunction('sqrt')} className="btn-function">√</button>

            {/* Row 2 - Inverse Functions */}
            <button onClick={() => handleScientificFunction('asin')} className="btn-function">sin⁻¹</button>
            <button onClick={() => handleScientificFunction('acos')} className="btn-function">cos⁻¹</button>
            <button onClick={() => handleScientificFunction('atan')} className="btn-function">tan⁻¹</button>
            <button onClick={() => handleScientificFunction('exp')} className="btn-function">eˣ</button>
            <button onClick={() => handleOperation('^')} className="btn-function">xʸ</button>
            <button onClick={() => handleScientificFunction('cbrt')} className="btn-function">∛</button>

            {/* Row 3 - Memory and Clear */}
            <button onClick={() => handleMemory('MC')} className="btn-memory">MC</button>
            <button onClick={() => handleMemory('MR')} className="btn-memory">MR</button>
            <button onClick={() => handleMemory('M+')} className="btn-memory">M+</button>
            <button onClick={() => handleMemory('M-')} className="btn-memory">M-</button>
            <button onClick={() => handleMemory('MS')} className="btn-memory">MS</button>
            <button onClick={clearEntry} className="btn-clear">CE</button>

            {/* Row 4 - More functions */}
            <button onClick={() => handleConstant('π')} className="btn-constant">π</button>
            <button onClick={() => handleConstant('e')} className="btn-constant">e</button>
            <button onClick={() => handleScientificFunction('x²')} className="btn-function">x²</button>
            <button onClick={() => handleScientificFunction('x³')} className="btn-function">x³</button>
            <button onClick={() => handleScientificFunction('1/x')} className="btn-function">1/x</button>
            <button onClick={clear} className="btn-clear">C</button>

            {/* Row 5 - Operations */}
            <button onClick={() => handleScientificFunction('abs')} className="btn-function">|x|</button>
            <button onClick={() => handleScientificFunction('factorial')} className="btn-function">x!</button>
            <button onClick={() => handleOperation('mod')} className="btn-operation">mod</button>
            <button onClick={() => handleScientificFunction('±')} className="btn-function">±</button>
            <button onClick={handleBackspace} className="btn-clear">⌫</button>
            <button onClick={() => handleOperation('÷')} className="btn-operation">÷</button>

            {/* Row 6 - Numbers */}
            <button onClick={() => handleNumber('7')} className="btn-number">7</button>
            <button onClick={() => handleNumber('8')} className="btn-number">8</button>
            <button onClick={() => handleNumber('9')} className="btn-number">9</button>
            <button onClick={() => handleOperation('×')} className="btn-operation">×</button>
            <button onClick={() => handleNumber('(')} className="btn-function">(</button>
            <button onClick={() => handleNumber(')')} className="btn-function">)</button>

            {/* Row 7 - Numbers */}
            <button onClick={() => handleNumber('4')} className="btn-number">4</button>
            <button onClick={() => handleNumber('5')} className="btn-number">5</button>
            <button onClick={() => handleNumber('6')} className="btn-number">6</button>
            <button onClick={() => handleOperation('-')} className="btn-operation">-</button>
            <button onClick={() => handleNumber('00')} className="btn-number">00</button>
            <button onClick={() => handleNumber('%')} className="btn-function">%</button>

            {/* Row 8 - Numbers */}
            <button onClick={() => handleNumber('1')} className="btn-number">1</button>
            <button onClick={() => handleNumber('2')} className="btn-number">2</button>
            <button onClick={() => handleNumber('3')} className="btn-number">3</button>
            <button onClick={() => handleOperation('+')} className="btn-operation">+</button>
            <button onClick={() => handleNumber('0')} className="btn-number col-span-2">0</button>

            {/* Row 9 - Bottom */}
            <button onClick={handleDecimal} className="btn-number">.</button>
            <button onClick={calculate} className="btn-equals col-span-5">=</button>
          </div>
        </div>

        {/* History Panel */}
        <div className="lg:col-span-1">
          <div className="bg-smoke rounded-lg p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">History</h3>
              <button
                onClick={() => setHistory([])}
                className="text-xs text-light-gray hover:text-white transition-colors"
              >
                Clear
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-light-gray text-sm italic">No calculations yet</p>
              ) : (
                history.map((calc, index) => (
                  <div
                    key={index}
                    className="bg-charcoal rounded p-2 text-sm text-white font-mono break-all cursor-pointer hover:bg-electric-lime hover:text-charcoal transition-colors"
                    onClick={() => {
                      const result = calc.split(' = ')[1]
                      if (result) {
                        setDisplay(result)
                        setWaitingForNewValue(true)
                      }
                    }}
                  >
                    {calc}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-number {
          @apply bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal transition-colors font-medium py-3 px-4 rounded text-lg;
        }
        .btn-operation {
          @apply bg-electric-blue text-white hover:bg-electric-blue/80 transition-colors font-medium py-3 px-4 rounded text-lg;
        }
        .btn-function {
          @apply bg-amber text-charcoal hover:bg-amber/80 transition-colors font-medium py-3 px-4 rounded text-sm;
        }
        .btn-memory {
          @apply bg-smoke text-white hover:bg-electric-lime hover:text-charcoal transition-colors font-medium py-3 px-4 rounded text-sm;
        }
        .btn-constant {
          @apply bg-neon-green text-charcoal hover:bg-neon-green/80 transition-colors font-medium py-3 px-4 rounded text-lg;
        }
        .btn-clear {
          @apply bg-crimson text-white hover:bg-crimson/80 transition-colors font-medium py-3 px-4 rounded text-lg;
        }
        .btn-equals {
          @apply bg-electric-lime text-charcoal hover:bg-electric-lime/80 transition-colors font-bold py-3 px-4 rounded text-xl;
        }
      `}</style>
    </div>
  )
}
