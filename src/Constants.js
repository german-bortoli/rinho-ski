export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;
export const RHINO_START_MILISECONDS = 15000;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const SKIER_DEATH = 'skierDeath';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const JUMP_RAMP = 'jumpRamp';
export const SKIER_JUMP1 = 'skierJump1';
export const SKIER_JUMP2 = 'skierJump2';
export const SKIER_JUMP3 = 'skierJump3';
export const SKIER_JUMP4 = 'skierJump4';
export const SKIER_JUMP5 = 'skierJump5';
export const RHINO_DEFAULT = 'rhinoDefault';
export const RHINO_LIFT = 'rhinoLift';
export const RHINO_LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen';
export const RHINO_LIFT_EAT1 = 'rhinoLiftEat1';
export const RHINO_LIFT_EAT2 = 'rhinoLiftEat2';
export const RHINO_LIFT_EAT3 = 'rhinoLiftEat3';
export const RHINO_LIFT_EAT4 = 'rhinoLiftEat4';
export const RHINO_RUN_LEFT1 = 'rhinoRunLeft1';
export const RHINO_RUN_LEFT2 = 'rhinoRunLeft2';

export const JUMPING_DURATION = 1200;

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_DEATH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE]: 'img/tree_1.png',
    [TREE_CLUSTER]: 'img/tree_cluster.png',
    [ROCK1]: 'img/rock_1.png',
    [ROCK2]: 'img/rock_2.png',
    [JUMP_RAMP]: 'img/jump_ramp.png',
    [SKIER_JUMP1]: 'img/skier_jump_1.png',
    [SKIER_JUMP2]: 'img/skier_jump_2.png',
    [SKIER_JUMP3]: 'img/skier_jump_3.png',
    [SKIER_JUMP4]: 'img/skier_jump_4.png',
    [SKIER_JUMP5]: 'img/skier_jump_5.png',

    [RHINO_DEFAULT]: 'img/rhino_default.png',
    [RHINO_LIFT]: 'img/rhino_lift.png',
    [RHINO_LIFT_MOUTH_OPEN]: 'img/rhino_lift_mouth_open.png',
    [RHINO_LIFT_EAT1]: 'img/rhino_lift_eat_1.png',
    [RHINO_LIFT_EAT2]: 'img/rhino_lift_eat_2.png',
    [RHINO_LIFT_EAT3]: 'img/rhino_lift_eat_3.png',
    [RHINO_LIFT_EAT4]: 'img/rhino_lift_eat_4.png',
    [RHINO_RUN_LEFT1]: 'img/rhino_run_left.png',
    [RHINO_RUN_LEFT2]: 'img/rhino_run_left_2.png',
};

export const SKIER_DIRECTIONS = {
    CRASH: 0,
    LEFT: 1,
    LEFT_DOWN: 2,
    DOWN: 3,
    RIGHT_DOWN: 4,
    RIGHT: 5,
    DEATH: 6,
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
    [SKIER_DIRECTIONS.DEATH]: SKIER_CRASH,
};

export const SKIER_ACTIONS = {
    JUMPING: 'JUMPING',
    SKYING: 'SKYING',
}

export const RHINO_ACTIONS = {
    RUNNING: 'RUNNING',
    EATING: 'EATING',
}

export const JUMP_FRAMES = [
    SKIER_JUMP1,
    SKIER_JUMP2,
    SKIER_JUMP3,
    SKIER_JUMP4,
    SKIER_JUMP5,
];

export const RHINO_FRAMES = [
    RHINO_LIFT,
    RHINO_LIFT_MOUTH_OPEN,
    RHINO_LIFT_EAT1,
    RHINO_LIFT_EAT2,
    RHINO_LIFT_EAT3,
    RHINO_LIFT_EAT4
];

export const GAME_STATUS = {
    RUNNING: 'RUNNING',
    PAUSE: 'PAUSE',
    GAME_OVER: 'GAME_OVER',
    INIT: 'INIT',
};

export const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    ENTER: 13,
    ESCAPE: 27,
};