import {resolve} from 'path'

export default {
    main: resolve(__dirname, '../index.html'),
    trend: resolve(__dirname, './pages/trend.html'),
    content: resolve(__dirname, './pages/oilcontent.html'),
    losses: resolve(__dirname, './pages/losses.html'),
    settings: resolve(__dirname, './pages/settings.html'),
    history: resolve(__dirname, './pages/histories.html')
}