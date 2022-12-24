/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'

const CustomBackgroundCss = createGlobalStyle`
  @keyframes loop {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .loop-content {
    width: 50rem;
    position: relative;
    overflow: hidden;
  }

  .loop {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 0 0.2rem;
    color: #e2e8f0;
    background-color: rgba(7, 89, 133, 1);
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    margin: 0.25rem 0.5rem;
    height: 40px;
    cursor: pointer;
    // text-transform: uppercase;
    box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 20%),
                0 0.2rem 0.25rem rgb(0 0 0 / 30%),
                0 0.3rem 0.5rem rgb(0 0 0 / 40%);
  }

  .tag span {
    font-size: 1.2rem;
    color: #64748b;
  }
`

const FadeTags = () => {
  const skills = [
    'Ruby', 'Typescript', 'Python', 'Java', 'Javascript',
    'HTML', 'React', 'Go', 'PHP', 'C#', 'PostgreSQL', 'MySQL',
    'NodeJS', '.Net', 'Flask', 'Rails', 'Wails', 'Linux',
    'MongoDB', 'InfluxDB'
  ];
  return (
    <>
      <CustomBackgroundCss />
      <div
        className="h-screen flex items-center justify-center"
      >
        <div className='loop-content'>
          <div className='loop'>
            {
              skills.map((tag: string) => (
                <div className='tag'><span>#</span>{tag}</div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FadeTags
