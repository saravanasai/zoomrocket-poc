import { List, ListItem, ListItemText, ListSubheader, Switch } from "@mui/material"


const BuilderSideBar = ({ menuList, onChangeOuterToggle, onChangeInnerToggle }) => {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >
            {menuList.map(({ tittle, keys, isChecked }, index) => (
                <li key={`section-${index}`}>
                    <ul>
                        <ListSubheader>{`${tittle}`} <Switch checked={isChecked} onChange={e => onChangeOuterToggle(index)} /> </ListSubheader>
                        {keys.map(({ value, isActive }, i) => (
                            <ListItem key={`item-${index}-${i}`}>
                                <ListItemText primary={`${value}`} />
                                <Switch checked={isActive} disabled={!isChecked} onChange={e => onChangeInnerToggle(index, i)} />
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    )
}

export default BuilderSideBar