'use client'

import { useState, useEffect } from 'react'

// Hook simples para guardar dados no navegador
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue)

  // Tenta carregar o valor salvo quando a tela abre
  useEffect(() => {
    try {
      const item = localStorage.getItem(key)
      if (item !== null) setValue(JSON.parse(item))
    } catch (e) {
      // se der erro, mantém o valor inicial
    }
  }, [key])

  const save = (newValue) => {
    setValue(newValue)
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (e) {}
  }

  return [value, save]
}
