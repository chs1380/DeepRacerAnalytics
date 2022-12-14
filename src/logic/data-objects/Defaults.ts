import HyperParameters from '../data-objects/HyperParameters';
import EnvironmentInfo from '../data-objects/EnvironmentInfo';
import AnalysisResult from '../data-objects/AnalysisResult';
import Episode from '../data-objects/Episode';

class Defaults {

    static DEFAULT_HYPER_PARAMS: HyperParameters = {
        batch_size: -1,
        beta_entropy: -1,
        discount_factor: -1,
        e_greedy_value: -1,
        epsilon_steps: -1,
        exploration_type: '',
        loss_type: '',
        lr: -1,
        num_episodes_between_training: -1,
        num_epochs: -1,
        stack_size: -1,
        term_cond_avg_score: -1,
        term_cond_max_episodes: -1,
    };

    static EMPTY_ENVIRONMENT: EnvironmentInfo = {
        METRICS_S3_BUCKET: [],
        METRICS_S3_OBJECT_KEY: [],
        RACER_NAME: 'UNKNOWN_RACER_NAME',
        LEADERBOARD_TYPE: 'UNKNOWN_LEADERBOARD_TYPE',
        JOB_TYPE: 'TRAINING',
        VIDEO_JOB_TYPE: 'TRAINING',
        LEADERBOARD_NAME: 'UNKNOWN_LEADERBOARD_NAME',
        RACE_TYPE: 'TIME_TRIAL',
        WORLD_NAME: 'reinvent_base',
        MP4_S3_OBJECT_PREFIX: 'UNKNOWN_MP4_S3_OBJECT_PREFIX',
        MODEL_S3_PREFIX: [],
        MODEL_S3_BUCKET: [],
        MODEL_NAME: 'UNKNOWN_MODEL_NAME',
        CAR_COLOR: [],
        S3_KMS_CMK_ARN: 'UNKNOWN_S3_KMS_CMK_ARN',
        NUMBER_OF_TRIALS: -1,
        BODY_SHELL_TYPE: [],
        AWS_REGION: 'UNKNOWN_AWS_REGION',
        MP4_S3_BUCKET: 'UNKNOWN_MP4_S3_BUCKET',
        KINESIS_VIDEO_STREAM_NAME: 'UNKNOWN_KINESIS_VIDEO_STREAM_NAME',
        CAR_NAME: 'UNKNOWN_CAR_NAME',
        SIMTRACE_S3_BUCKET: 'UNKNOWN_SIMTRACE_S3_BUCKET',
        SIMTRACE_S3_PREFIX: 'UNKNOWN_SIMTRACE_S3_PREFIX',
        NUMBER_OF_RESETS: -1,
        ROBOMAKER_SIMULATION_JOB_ACCOUNT_ID: -1,
        IS_CONTINUOUS: false,
        OFF_TRACK_PENALTY: -1,
        MODEL_METADATA_FILE_S3_KEY: [],
        SENSOR: 'FRONT_FACING_CAMERA'
    };


    static DEFAULT_RESULT: AnalysisResult = {
        actionSpaces: [],
        environmentInfo: Defaults.EMPTY_ENVIRONMENT,
        hyperParams: Defaults.DEFAULT_HYPER_PARAMS,
        steps: [],
        episodes: []
    };

    static DEFAULT_EPISODE: Episode = {
        steps: []
    };
}

export default Defaults;
