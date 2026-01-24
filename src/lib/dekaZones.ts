export type DekaZone = {
  id: number
  name: string
  description: string
  reps: number
  men?: string
  women?: string
  unit: string
}

export const DEKA_ZONES: DekaZone[] = [
  {
    id: 1,
    name: 'Zancadas lastradas',
    description: '30 zancadas inversas con piernas alternadas',
    reps: 30,
    men: '25 kg',
    women: '15 kg',
    unit: 'reps',
  },
  {
    id: 2,
    name: 'Remo',
    description: '500m de remo en máquina con resistencia libre',
    reps: 500,
    unit: 'metros',
  },
  {
    id: 3,
    name: 'Saltos al cajón',
    description: '20 saltos al cajón de 60 cm',
    reps: 20,
    unit: 'reps',
  },
  {
    id: 4,
    name: 'Abdominal con balón medicinal',
    description: '25 repeticiones con balón medicinal hasta tocar la diana',
    reps: 25,
    men: '9 kg',
    women: '6 kg',
    unit: 'reps',
  },
  {
    id: 5,
    name: 'Ski erg',
    description: '500 metros en máquina de ski erg con resistencia libre',
    reps: 500,
    unit: 'metros',
  },
  {
    id: 6,
    name: 'Paseo del granjero',
    description: '100 metros con mancuernas pesadas en cada mano',
    reps: 100,
    men: '27,5 kg',
    women: '17,5 kg',
    unit: 'metros',
  },
  {
    id: 7,
    name: 'Air bike',
    description: '25 calorías en máquina de air bike',
    reps: 25,
    unit: 'calorías',
  },
  {
    id: 8,
    name: 'Balón medicinal',
    description: '20 lanzamientos de balón medicinal por encima de un muro de 1,2 metros',
    reps: 20,
    men: '30 kg',
    women: '20 kg',
    unit: 'reps',
  },
  {
    id: 9,
    name: 'Empuje y tirón de trineo',
    description: '100 metros empujando y tirando un trineo con peso',
    reps: 100,
    unit: 'metros',
  },
  {
    id: 10,
    name: 'Burpees lastrados',
    description: '20 burpees con peso lastrado',
    reps: 20,
    men: '20 kg',
    women: '10 kg',
    unit: 'reps',
  },
]
