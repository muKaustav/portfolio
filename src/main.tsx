import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

console.log(
	`
%c
    ┌──────────────────────────────────────────────────┐
    │  ┌─────────────────────────────────────────────┐ │
    │  │  C:\\> you found the console_                │ │
    │  │                                             │ │
    │  │  [■] curiosity = true                       │ │
    │  │  [■] coffee_level = "optimal"               │ │
    │  │  [■] bugs_squashed = 42                     │ │
    │  │                                             │ │
    │  │  > hire_me --reason="builds cool stuff"     │ │
    │  │  Request accepted.                          │ │
    │  │                                             │ │
    │  └─────────────────────────────────────────────┘ │
    │  ○ ○ ○                                    v2.0   │
    └──────────────────────────────────────────────────┘

    ▸ GitHub: muKaustav
    ▸ X (Twitter): @kaussycs

`,
	'color: #8ab4f8; font-family: monospace;'
)

createRoot(document.getElementById('root')!).render(<App />)
