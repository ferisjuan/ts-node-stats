import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('src/data/football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new WinsAnalysis('Newcastle'), new ConsoleReport())

summary.buildAndReport(matchReader.matches)

const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United')
