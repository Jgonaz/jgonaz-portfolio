import {
  AzureIcon,
  AWSIcon,
  CSharpIcon,
  CSS3Icon,
  DotnetIcon,
  GitIcon,
  GitHubIcon,
  Html5Icon,
  JavaScriptIcon,
  MongoDbIcon,
  NextJSIcon,
  NodeJSIcon,
  NotionIcon,
  ReactIcon,
  SassIcon,
  SQLIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
  ViteJSIcon,
  VueIcon,
  WordPressIcon
} from '@/app/[lang]/_assets/Icons'
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
        <li className='mx-12 brighter'>
          <JavaScriptIcon />
        </li>
        <li className='mx-12 brighter'>
          <AWSIcon fill='#fff' height='45' />
        </li>
        <li className='mx-12 brightest'>
          <AzureIcon  />
        </li>
        <li className='mx-12'>
          <CSharpIcon />
        </li>
        <li className='mx-12 brighter'>
          <DotnetIcon />
        </li>
        <li className='mx-12 brighter'>
          <SQLIcon />
        </li>
        <li className='mx-12 brighter'>
          <TypeScriptIcon />
        </li>
        <li className='mx-12'>
          <WordPressIcon fill='#fff' />
        </li>
        <li className='mx-12'>
          <NotionIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <SassIcon />
        </li>
        <li className='mx-12 brighter'>
          <TailwindIcon />
        </li>
        <li className='mx-12 brighter'>
          <GitIcon />
        </li>
        <li className='mx-12'>
          <GitHubIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <VueIcon className='mt-4' />
        </li>
        <li className='mx-12'>
          <NextJSIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <ReactIcon />
        </li>
        <li className='mx-12 brighter'>
          <ViteJSIcon />
        </li>
        <li className='mx-12 brighter'>
          <NodeJSIcon />
        </li>
        <li className='mx-12'>
          <MongoDbIcon className='mb-2' />
        </li>
        <li className='mx-12'>
          <VercelIcon fill='#fff' />
        </li>
        {/* Duplicate the list items to make the slide infinite */}
        <li className='mx-12 brighter'>
          <JavaScriptIcon />
        </li>
        <li className='mx-12 brighter'>
          <AWSIcon fill='#fff' height='45' />
        </li>
        <li className='mx-12 brightest'>
          <AzureIcon />
        </li>
        <li className='mx-12'>
          <CSharpIcon />
        </li>
        <li className='mx-12 brighter'>
          <DotnetIcon />
        </li>
        <li className='mx-12 brighter'>
          <SQLIcon />
        </li>
        <li className='mx-12 brighter'>
          <TypeScriptIcon />
        </li>
        <li className='mx-12'>
          <WordPressIcon fill='#fff' />
        </li>
        <li className='mx-12'>
          <NotionIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <SassIcon />
        </li>
        <li className='mx-12 brighter'>
          <TailwindIcon />
        </li>
        <li className='mx-12 brighter'>
          <GitIcon />
        </li>
        <li className='mx-12'>
          <GitHubIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <VueIcon className='mt-4' />
        </li>
        <li className='mx-12'>
          <NextJSIcon fill='#fff' />
        </li>
        <li className='mx-12 brighter'>
          <ReactIcon />
        </li>
        <li className='mx-12 brighter'>
          <ViteJSIcon />
        </li>
        <li className='mx-12 brighter'>
          <NodeJSIcon />
        </li>
        <li className='mx-12'>
          <MongoDbIcon className='mb-2' />
        </li>
        <li className='mx-12'>
          <VercelIcon fill='#fff' />
        </li>
      </ul>
    </div>
  )
}
