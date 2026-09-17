/**
 * Voice catalogue for the two free voice engines.
 * Shared by the admin panel (which engines people may pick from), the
 * production layout (voice picker + preview) and the narration generator.
 */

export type VoiceOption = {
  id: string;
  label: string;
  engine: string;
  gender: "female" | "male";
  blurb: string;
  /** Prebuilt voice used by the built-in voice engine. */
  gatewayVoice: string;
  /** ElevenLabs voice used when a paid key is configured. */
  elevenId: string;
  /** Delivery direction prepended to the narration. */
  direction: string;
};

export type VoiceEngine = {
  id: string;
  label: string;
  blurb: string;
  voices: VoiceOption[];
};

export const VOICE_ENGINES: VoiceEngine[] = [
  {
    id: "edge-tts",
    label: "Edge voices",
    blurb: "Free newsroom-clean narration. Great for explainers and documentaries.",
    voices: [
      {
        id: "edge-aria",
        label: "Aria",
        engine: "edge-tts",
        gender: "female",
        blurb: "Warm, confident presenter",
        gatewayVoice: "Kore",
        elevenId: "9BWtsMINqrJLrRacOk9x",
        direction: "warm, confident and clear, like a trusted presenter",
      },
      {
        id: "edge-guy",
        label: "Guy",
        engine: "edge-tts",
        gender: "male",
        blurb: "Punchy, upbeat host",
        gatewayVoice: "Puck",
        elevenId: "TX3LPaxmHKxFdv7VOQHJ",
        direction: "upbeat, punchy and energetic, like a popular YouTube host",
      },
      {
        id: "edge-davis",
        label: "Davis",
        engine: "edge-tts",
        gender: "male",
        blurb: "Deep documentary tone",
        gatewayVoice: "Charon",
        elevenId: "onwK4e9ZLuTAKqWW03F9",
        direction: "deep, slow and cinematic, like a documentary narrator",
      },
      {
        id: "edge-jenny",
        label: "Jenny",
        engine: "edge-tts",
        gender: "female",
        blurb: "Calm, friendly storyteller",
        gatewayVoice: "Aoede",
        elevenId: "EXAVITQu4vr4xnSDxMaL",
        direction: "calm, friendly and gently paced, like a bedtime storyteller",
      },
      {
        id: "edge-claire",
        label: "Claire",
        engine: "edge-tts",
        gender: "female",
        blurb: "Polished editorial read",
        gatewayVoice: "Callirrhoe",
        elevenId: "9BWtsMINqrJLrRacOk9x",
        direction: "polished, articulate and editorial, with crisp pacing",
      },
      {
        id: "edge-sophia",
        label: "Sophia",
        engine: "edge-tts",
        gender: "female",
        blurb: "Clear educational guide",
        gatewayVoice: "Autonoe",
        elevenId: "EXAVITQu4vr4xnSDxMaL",
        direction: "clear, patient and intelligent, like an expert educator",
      },
      {
        id: "edge-emma",
        label: "Emma",
        engine: "edge-tts",
        gender: "female",
        blurb: "Natural conversational host",
        gatewayVoice: "Despina",
        elevenId: "Xb7hH8MSUJpSbSDYk0k2",
        direction: "natural, engaging and conversational, with subtle warmth",
      },
      {
        id: "edge-ava",
        label: "Ava",
        engine: "edge-tts",
        gender: "female",
        blurb: "Smooth luxury narrator",
        gatewayVoice: "Achernar",
        elevenId: "pFZP5JQG7iQjIQuC4Bku",
        direction: "smooth, refined and understated, like a premium brand narrator",
      },
      {
        id: "edge-james",
        label: "James",
        engine: "edge-tts",
        gender: "male",
        blurb: "Authoritative news anchor",
        gatewayVoice: "Iapetus",
        elevenId: "onwK4e9ZLuTAKqWW03F9",
        direction: "authoritative, precise and composed, like a senior news anchor",
      },
      {
        id: "edge-ryan",
        label: "Ryan",
        engine: "edge-tts",
        gender: "male",
        blurb: "Friendly tech presenter",
        gatewayVoice: "Algieba",
        elevenId: "TX3LPaxmHKxFdv7VOQHJ",
        direction: "friendly, modern and assured, like a technology presenter",
      },
      {
        id: "edge-thomas",
        label: "Thomas",
        engine: "edge-tts",
        gender: "male",
        blurb: "Measured documentary read",
        gatewayVoice: "Algenib",
        elevenId: "iP95p4xoKVk53GoZ742B",
        direction: "measured, thoughtful and cinematic, with documentary gravitas",
      },
      {
        id: "edge-liam",
        label: "Liam",
        engine: "edge-tts",
        gender: "male",
        blurb: "Energetic sports delivery",
        gatewayVoice: "Rasalgethi",
        elevenId: "bIHbv24MWmeRgasZH58o",
        direction: "energetic, confident and fast-moving, like a sports broadcaster",
      },
    ],
  },
  {
    id: "kokoro",
    label: "Kokoro voices",
    blurb: "Free character-rich narration. Great for stories and faceless channels.",
    voices: [
      {
        id: "kokoro-bella",
        label: "Bella",
        engine: "kokoro",
        gender: "female",
        blurb: "Bright and expressive",
        gatewayVoice: "Leda",
        elevenId: "Xb7hH8MSUJpSbSDYk0k2",
        direction: "bright, expressive and lively",
      },
      {
        id: "kokoro-nicole",
        label: "Nicole",
        engine: "kokoro",
        gender: "female",
        blurb: "Soft, close-mic whisper",
        gatewayVoice: "Zephyr",
        elevenId: "pFZP5JQG7iQjIQuC4Bku",
        direction: "soft, intimate and close to the microphone, almost a whisper",
      },
      {
        id: "kokoro-adam",
        label: "Adam",
        engine: "kokoro",
        gender: "male",
        blurb: "Steady, natural read",
        gatewayVoice: "Orus",
        elevenId: "bIHbv24MWmeRgasZH58o",
        direction: "steady, natural and conversational",
      },
      {
        id: "kokoro-michael",
        label: "Michael",
        engine: "kokoro",
        gender: "male",
        blurb: "Dramatic trailer voice",
        gatewayVoice: "Fenrir",
        elevenId: "iP95p4xoKVk53GoZ742B",
        direction: "dramatic and intense, like a movie trailer",
      },
      {
        id: "kokoro-luna",
        label: "Luna",
        engine: "kokoro",
        gender: "female",
        blurb: "Dreamy cinematic storyteller",
        gatewayVoice: "Laomedeia",
        elevenId: "Xb7hH8MSUJpSbSDYk0k2",
        direction: "dreamy, cinematic and emotionally vivid, with gentle pauses",
      },
      {
        id: "kokoro-maya",
        label: "Maya",
        engine: "kokoro",
        gender: "female",
        blurb: "Playful social narrator",
        gatewayVoice: "Pulcherrima",
        elevenId: "9BWtsMINqrJLrRacOk9x",
        direction: "playful, expressive and social, with an infectious smile",
      },
      {
        id: "kokoro-evelyn",
        label: "Evelyn",
        engine: "kokoro",
        gender: "female",
        blurb: "Elegant history narrator",
        gatewayVoice: "Vindemiatrix",
        elevenId: "EXAVITQu4vr4xnSDxMaL",
        direction: "elegant, poised and atmospheric, like a historical storyteller",
      },
      {
        id: "kokoro-zara",
        label: "Zara",
        engine: "kokoro",
        gender: "female",
        blurb: "Bold dramatic performer",
        gatewayVoice: "Gacrux",
        elevenId: "pFZP5JQG7iQjIQuC4Bku",
        direction: "bold, dramatic and emotionally powerful, like a character performer",
      },
      {
        id: "kokoro-noah",
        label: "Noah",
        engine: "kokoro",
        gender: "male",
        blurb: "Relaxed podcast voice",
        gatewayVoice: "Enceladus",
        elevenId: "bIHbv24MWmeRgasZH58o",
        direction: "relaxed, authentic and conversational, like a polished podcast host",
      },
      {
        id: "kokoro-leo",
        label: "Leo",
        engine: "kokoro",
        gender: "male",
        blurb: "Upbeat creator voice",
        gatewayVoice: "Sadachbia",
        elevenId: "TX3LPaxmHKxFdv7VOQHJ",
        direction: "upbeat, charismatic and quick, like a confident online creator",
      },
      {
        id: "kokoro-arthur",
        label: "Arthur",
        engine: "kokoro",
        gender: "male",
        blurb: "Rich audiobook narrator",
        gatewayVoice: "Schedar",
        elevenId: "onwK4e9ZLuTAKqWW03F9",
        direction: "rich, immersive and carefully paced, like a premium audiobook narrator",
      },
      {
        id: "kokoro-felix",
        label: "Felix",
        engine: "kokoro",
        gender: "male",
        blurb: "Intense mystery narrator",
        gatewayVoice: "Zubenelgenubi",
        elevenId: "iP95p4xoKVk53GoZ742B",
        direction: "intense, mysterious and controlled, building suspense naturally",
      },
    ],
  },
];

/** Engine ids that can be switched on for everyone at once. */
export const FREE_VOICE_ENGINE_IDS = VOICE_ENGINES.map((engine) => engine.id);

export const ALL_VOICES: VoiceOption[] = VOICE_ENGINES.flatMap((engine) => engine.voices);

export const DEFAULT_VOICE_ID = "edge-aria";

/** Legacy tone names once stored on videos. */
const LEGACY: Record<string, string> = {
  warm: "edge-aria",
  bright: "kokoro-bella",
  deep: "edge-davis",
  calm: "edge-jenny",
  Kore: "edge-aria",
  Puck: "edge-guy",
  Charon: "edge-davis",
  Aoede: "edge-jenny",
};

export function findVoice(voiceId: string | null | undefined): VoiceOption {
  const id = voiceId ? (LEGACY[voiceId] ?? voiceId) : DEFAULT_VOICE_ID;
  return ALL_VOICES.find((voice) => voice.id === id) ?? ALL_VOICES[0]!;
}

/** Voices a viewer may pick, limited to the engines the admin turned on. */
export function voicesForEngines(engineIds: string[]): VoiceEngine[] {
  const allowed = engineIds.length ? engineIds : FREE_VOICE_ENGINE_IDS;
  return VOICE_ENGINES.filter((engine) => allowed.includes(engine.id));
}
