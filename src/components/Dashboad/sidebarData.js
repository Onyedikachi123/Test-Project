import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LayersIcon from '@material-ui/icons/Layers';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import HistoryIcon from '@material-ui/icons/History';

export const SidebarData = [
    {
        title: "Dashboard",
        icon:   <DashboardIcon />,
        link:    "/dashboard"
    },
    {
        title: "Companies",
        icon:   <BusinessIcon />,
        link:    "#"
    },
    {
        title: "Order Pool",
        icon:   <LayersIcon />,
        link:    "#"
    },
    {
        title: "Order History",
        icon:   <HistoryIcon />,
        link:    "#"
    },
    {
        title: "Subscriptions",
        icon:   <SubscriptionsIcon />,
        link:    "#"
    },
    {
        title: "Earnings",
        icon:   <LocalAtmIcon />,
        link:    "#"
    },
    {
        title: "Reports",
        icon:   <AssessmentIcon />,
        link:    "#"
    },
    {
        title: "Settings",
        icon:   <SettingsIcon />,
        link:    "#"
    },
    {
        title: "Supports",
        icon:   <HelpIcon />,
        link:    "#"
    }
]