import {
  CSharpIcon,
  DotnetIcon,
  GitIcon,
  GitHubIcon,
  JavaScriptIcon,
  MongoDbIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  SassIcon,
  SQLIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
  ViteJSIcon,
  PiniaIcon,
  OpenAIIcon,
  ClaudeIcon,
  GitHubCopilotIcon,
  SupabaseIcon,
  OllamaIcon,
  PlaywrightIcon,
  NuxtIcon,
  VueIcon,
} from '@/app/[lang]/_assets/TechnologiesIcons'
import '@/app/[lang]/_styles/infiniteSlide.css'

export default function InfiniteSlide () {
  return (
    <div
      className='w-full inline-flex flex-nowrap overflow-hidden border border-jade-50 border-opacity-35
    [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)] 
    md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)] 
    lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'
    >
      <ul className='flex items-center justify-center md:justify-start infinite-slide'>
        <li className='mx-8 md:mx-12 brighter'>
          <SassIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <TailwindIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <JavaScriptIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <TypeScriptIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <ReactIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <VueIcon className='mt-2' height='55' width='55' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <NuxtIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <PiniaIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <NextJSIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <ViteJSIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <PlaywrightIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <OllamaIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <OpenAIIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <ClaudeIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <NodeJSIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <MongoDbIcon className='mb-2' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <SQLIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <CSharpIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <DotnetIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <SupabaseIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <GitIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <GitHubIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <GitHubCopilotIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <VercelIcon fill='#fff' />
        </li>
        {/* Duplicate the list items to make the slide infinite */}
        <li className='mx-8 md:mx-12 brighter'>
          <SassIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <TailwindIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <JavaScriptIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <TypeScriptIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <ReactIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <VueIcon className='mt-2' height='55' width='55' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <NuxtIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <PiniaIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <NextJSIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <ViteJSIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <PlaywrightIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <OllamaIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <OpenAIIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <ClaudeIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <NodeJSIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <MongoDbIcon className='mb-2' />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <SQLIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <CSharpIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <DotnetIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <SupabaseIcon />
        </li>
        <li className='mx-8 md:mx-12 brighter'>
          <GitIcon />
        </li>
        <li className='mx-8 md:mx-12'>
          <GitHubIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <GitHubCopilotIcon fill='#fff' />
        </li>
        <li className='mx-8 md:mx-12'>
          <VercelIcon fill='#fff' />
        </li>
      </ul>
    </div>
  )
}
