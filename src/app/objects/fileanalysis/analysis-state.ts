export enum AnalysisState {
  WAITING,
  FILE_UPLOADED,
  EXTRACTING_FILE,
  MERGING_CSV_FILES,
  READING_LOGS,
  READING_HYPERPARAMS,
  READING_ACTIONSPACE,
  READING_METRICS,
  READING_ENVIRONMENTS,
  UPDATING_PANEL,
  DONE,
  ERROR
}
