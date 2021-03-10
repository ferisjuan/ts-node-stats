import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('src/data/football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new WinsAnalysis('Newcastle'), new ConsoleReport())

summary.builldAndReport(matchReader.matches)
