export const DATA = {
    weapons: {
        assault_rifles: [],
        submachine_guns: [],
        tactical_rifles: [],
        light_machine_guns: [],
        sniper_rifles: [],
        pistols: [],
        shotguns: [],
    },
    attachments: {
        optic: [],
        muzzle: [],
        barrel: [],
        body: [],
        underbarrel: [],
        magazine: [],
        handle: [],
        stock: [],
    },
    skills: {
        weapon_classes: [
            {
                title: "Submachine Guns",
                description: "Run and gun weapons. Stay on the move while entering and exiting combat quickly.",
                tiers: [
                    "Increase close-quarters bonus damage to 10%.",
                    "Increase critical bonus damage to 10%.",
                    "Unlock 3 additional attachment slots.",
                    "Increase close-quarters bonus damage to 25%.",
                    "Increase critical bonus damage to 25%"
                ]
            },
            {
                title: "Shotguns",
                description: "High damage spread fire at close range. Ineffective from a distance.",
                tiers: [
                    "Increase close-quarters bonus damage to 10%.",
                    "Increase critical bonus damage to 10%.",
                    "Increase armor penetration bonus damage to 10%.",
                    "Increase close-quarters bonus damage to 25%.",
                    "Increase critical bonus damage to 25%"
                ]
            },
            {
                title: "Pistols",
                description: "Precision weapon with fast reload but lower damage.",
                tiers: [
                    "Increase close-quarters bonus damage to 10%.",
                    "Increase critical bonus damage to 10%.",
                    "Increase armor penetration bonus damage to 10%.",
                    "Increase close-quarters bonus damage to 25%.",
                    "Increase critical bonus damage to 25%"
                ]
            }
        ],
        field_upgrades: {},
        perks: {},
        ammo_mods: {}
    },
    maps: {}
}
