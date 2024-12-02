import Avatar from './Avatar'
import Card from './Card'

const Profile: React.FC = () => {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: ''
                }}>
            </Avatar>
        </Card>
    )
}

export default Profile
