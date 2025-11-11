package com.example.tutorial.model;

public enum StatName {

    // ===== Shared (Physical & Mental) =====
    SPEED,
    ACCELERATION,
    STAMINA,
    STRENGTH,
    AGILITY,
    BALANCE,
    CREATIVITY,
    COMPOSURE,
    DECISION_MAKING,
    POSITIONING,
    VISION,
    WORK_RATE,
    LEADERSHIP,
    ANTICIPATION,
    CONCENTRATION,

    // ===== Technical (Shared Core Ball Skills) =====
    PASSING,
    DRIBBLING,
    BALL_CONTROL,
    SHOOTING,
    FINISHING,
    SHOT_POWER,
    HEADING,
    TACKLING,
    MARKING,
    CROSSING,
    LONG_PASS,
    SHORT_PASS,
    FIRST_TOUCH,

    // ===== Goalkeeper-Specific =====
    GK_DIVING,
    GK_HANDLING,
    GK_KICKING,
    GK_REFLEXES,
    GK_POSITIONING,
    GK_ONE_ON_ONE,
    GK_COMMUNICATION,

    // ===== Defender-Specific =====
    DEF_INTERCEPTIONS,
    DEF_CLEARANCES,
    DEF_STANDING_TACKLE,
    DEF_SLIDING_TACKLE,
    DEF_STRENGTH_IN_AIR,

    // ===== Midfielder-Specific =====
    MID_CREATIVITY,
    MID_VISION,
    MID_PASS_RANGE,
    MID_BALL_RECOVERY,
    MID_LONG_SHOT,
    MID_POSITION_DISCIPLINE,

    // ===== Forward-Specific =====
    ATT_FINISHING,
    ATT_OFF_THE_BALL,
    ATT_LONG_SHOTS,
    ATT_HEADING_ACCURACY,
    ATT_MOVEMENT,
    ATT_SHOT_POWER,
    ATT_FLAIR
}
