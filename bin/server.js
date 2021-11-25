const app = require('../app')
const PORT = process.env.PORT || 3000
const { main } = require('../db/connection')

const startLaunch = async () => {
  try {
    await main()
    app.listen(PORT, () => console.log(`Server running. Use our API on port: ${PORT}`))
  } catch (error) {
    console.error(`Failed to launch application with error: ${error.message}`)
    process.exit(1)
  }
}

startLaunch()
