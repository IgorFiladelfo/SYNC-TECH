// Funções usadas para controlar o ranking salvo no navegador
const KEY = 'sync-tech-ranking'

export function getRanking() {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch (e) {
    return []
  }
}

// Salva o resultado do quiz para aparecer no ranking
export function saveScore(name, score, difficulty) {
  const list = getRanking()
  const entry = {
    id: Date.now().toString(),
    name: (name || '').trim() || 'Anônimo',
    score,
    difficulty,
    date: new Date().toLocaleDateString('pt-BR'),
  }
  list.push(entry)
  localStorage.setItem(KEY, JSON.stringify(list))
  return list
}

export function clearRanking() {
  localStorage.removeItem(KEY)
}
