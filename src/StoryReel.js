import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryRow() {
    return (
        <div className='storyReel'>
            {/* Stories */}
            <Story image='https://images.unsplash.com/photo-1599394374539-785638ced249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80' 
             profileSrc='https://images.unsplash.com/profile-1598180752563-08bc765009b0image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
             title='Sarah Dukowich' />
            <Story image='https://images.unsplash.com/photo-1599394271454-4412e8fb9697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
             profileSrc='https://images.unsplash.com/profile-fb-1479728605-24822b4a7890.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff' 
             title='Markus Spiskie' />
            <Story image='https://images.unsplash.com/photo-1599334089831-f584f5f05a94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
             profileSrc='https://images.unsplash.com/profile-1578951549868-a84462f14bd8image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff' 
             title='Martin Katler' />
            <Story image='https://images.unsplash.com/photo-1599395098141-53533064d9a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
             profileSrc='https://images.unsplash.com/profile-1599243459128-5490ac7422ccimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
             title='Koes Nadi' />
            <Story image='https://images.unsplash.com/photo-1599362621730-5452856e5b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
             profileSrc='https://images.unsplash.com/profile-1574447227399-e09549507ddaimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
             title='Marcel Strausberg' />
            
        </div>
    )
}

export default StoryRow
