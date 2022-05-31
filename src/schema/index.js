
/**
 * 
 * Schema 
 * 
 */



export const UploadCOA = {
    schemaId: 1,
    path: '/coa',
    title: 'COA',
    uploadColumns: [
        {
            id: 1,
            key: 'id',
            label: 'ID',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        ,
        {
            id: 2,
            key: 'files',
            label: 'Upload File',
            editRecord: true,
            viewRecord: true,
            required: true,
            type: 'file'
        }
    ],
    columns: [
        {
            id: 1,
            key: 'id',
            label: 'ID',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'account_number',
            label: 'Account Number',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'account_name',
            label: 'Account Name',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'account_type',
            label: 'Account Type',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'allowable',
            label: 'Allowable',
            editRecord: false,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'checkbox'
        },
        {
            id: 6,
            key: 'created_at',
            label: 'Create At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 7,
            key: 'updated_at',
            label: 'Updated At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 8,
            key: 'published_at',
            label: 'Published At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 9,
            key: 'focus_setting',
            label: 'Focus #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 10,
            key: 'ssoi_setting',
            label: 'SSOI #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 11,
            key: 'action',
            label: 'Action',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ]
}

export const Focus = {
    schemaId: 2,
    path: '/focus',
    title: 'FOCUS',
    columns: [
        {
            id: 1,
            key: 'id',
            label: 'ID',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'description_line',
            label: 'FOCUS LINE ITEM DESCRIPTION',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'type',
            label: 'TYPE',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'focus_id',
            label: 'FOCUS ID',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'created_at',
            label: 'CREATED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 6,
            key: 'updated_at',
            label: 'UPDATED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 7,
            key: 'published_at',
            label: 'PUBLISHED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        }
    ]
}


export const SSOI = {
    schemaId: 3,
    path: '/ssoi',
    title: 'SSOI',
    columns: [
        {
            id: 1,
            key: 'id',
            label: 'ID',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'description_line',
            label: 'SSOI LINE ITEM DESCRIPTION',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'type',
            label: 'TYPE',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'ssoi_id',
            label: 'SSOI ID',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'created_at',
            label: 'CREATED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 6,
            key: 'updated_at',
            label: 'UPDATED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 7,
            key: 'published_at',
            label: 'PUBLISHED AT',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        }
    ]
}

export const TrialBalance = {
    schemaId: 4,
    path: '/ssoi',
    title: 'SSOI',
    columns: [
        {
            id: 1,
            key: 'id',
            label: '#',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'time_report',
            label: 'Time Report',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'file_name',
            label: 'File Name',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'status',
            label: 'Status',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'message',
            label: 'Message',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 6,
            key: 'efinop_user',
            label: 'Efinop User',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 7,
            key: 'created_at',
            label: 'Created Date',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 8,
            key: 'updated_at',
            label: 'Updated Date',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ],
    uploadColumns: [
        {
            id: 1,
            key: 'time_report',
            label: 'Time Report',
            editRecord: true,
            viewRecord: false,
            required: true,
            type: 'monthPicker'
        },
        {
            id: 2,
            key: 'files',
            label: 'Upload File',
            editRecord: true,
            viewRecord: false,
            required: true,
            type: 'file'
        }
    ]
}

export const Users = {
    schemaId: 5,
    path: '/settings/users',
    title: 'Users',
    columns: [
        {
            id: 1,
            key: 'id',
            label: '#',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'cognito_username',
            label: 'Cognito Username',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 3,
            key: 'crd_number',
            label: 'CRD Number',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 4,
            key: 'direct_phone_number',
            label: 'Direct Phone Number',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 5,
            key: 'user_title',
            label: 'User Title',
            editRecord: true,
            viewRecord: true,
            editOptions: {
                edit: true
            },
            type: 'select',
            options: [
                {
                    value: 'Mr.',
                    text: 'Mr.'
                },
                {
                    value: 'Ms.',
                    text: 'Ms.'
                },
                {
                    value: 'Mrs.',
                    text: 'Mrs.'
                }
            ]
        },
        {
            id: 6,
            key: 'first_name',
            label: 'First Name',
            editRecord: true,
            viewRecord: true,
            editOptions: {
                edit: true
            },
            type: 'text'
        },
        {
            id: 7,
            key: 'middle_name',
            label: 'Middle Name',
            editRecord: true,
            viewRecord: true,
            editOptions: {
                edit: true
            },
            type: 'text'
        },
        {
            id: 8,
            key: 'last_name',
            label: 'Last Name',
            editRecord: true,
            viewRecord: true,
            editOptions: {
                edit: true
            },
            type: 'text'
        },
        {
            id: 9,
            key: 'email',
            label: 'Email',
            editRecord: true,
            viewRecord: true,
            editOptions: {
                edit: true
            },
            type: 'text'
        },
        {
            id: 10,
            key: 'is_email_confirm',
            label: 'Email Confirm',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 11,
            key: 'is_phone_number_confirm',
            label: 'Phone Confirm',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 12,
            key: 'manage_review_accounting_focus',
            label: 'Focus',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 13,
            key: 'mfa_required',
            label: 'MFA Required',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 14,
            key: 'office_phone_number',
            label: 'Office Phone Number',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 15,
            key: 'outsourced_finop',
            label: 'Outsourced Finop',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 16,
            key: 'password',
            label: 'Password',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 17,
            key: 'phone_number',
            label: 'Phone Number',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 18,
            key: 'role',
            label: 'Role',
            editRecord: true,
            viewRecord: true,
            type: 'select',
            options: [
                {
                    value: 'ADMIN',
                    text: 'ADMIN'
                },
                {
                    value: 'MIDDLE',
                    text: 'MIDDLE'
                },
                {
                    value: 'VIEWER',
                    text: 'VIEWER'
                }
            ]
        },
        {
            id: 19,
            key: 'username',
            label: 'Username',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 20,
            key: 'created_at',
            label: 'Created At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 21,
            key: 'published_at',
            label: 'Published At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 22,
            key: 'updated_at',
            label: 'Updated At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 23,
            key: 'action',
            label: 'Action',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ]
}


export const ReviewCOA = {
    schemaId: 6,
    path: '/ssoi',
    title: 'SSOI',
    columns: [
        {
            id: 1,
            key: 'id',
            label: '#',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'first_name',
            label: 'First Name',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'last_name',
            label: 'Last Name',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'email',
            label: 'Email',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'phone_number',
            label: 'Phone Number',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 6,
            key: 'coa_reviews',
            label: 'COA Reviews',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 7,
            key: 'status',
            label: 'Status',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 8,
            key: 'action',
            label: 'Action',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ],
    coa_reviews_columns: [
        {
            id: 1,
            key: 'id',
            label: 'ID',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'account_number',
            label: 'Account Number',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'account_name',
            label: 'Account Name',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'account_type',
            label: 'Account Type',
            editRecord: true,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'allowable',
            label: 'Allowable',
            editRecord: false,
            viewRecord: true,
            required: true,
            sortable: true,
            type: 'checkbox'
        },
        {
            id: 6,
            key: 'created_at',
            label: 'Created Date',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 7,
            key: 'updated_at',
            label: 'Updated Date',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 8,
            key: 'published_at',
            label: 'Published At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 9,
            key: 'focus_setting',
            label: 'Focus #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 10,
            key: 'ssoi_setting',
            label: 'SSOI #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ],
    comments_columns: [
        {
            id: 1,
            key: 'id',
            label: '#',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'comment',
            label: 'Comment',
            editRecord: true,
            viewRecord: true,
            type: 'text',
            rows: 3,
            maxRows: 4,
            placeholder: "Enter the comment..."
        },
        {
            id: 3,
            key: 'created_at',
            label: 'Created At',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'updated_at',
            label: 'Updated At',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'published_at',
            label: 'Published At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        }
    ]
}


export const FinalCOA = {
    schemaId: 7,
    path: '/ssoi',
    title: 'SSOI',
    columns: [
        {
            id: 1,
            key: 'id',
            label: '#',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 2,
            key: 'account_name',
            label: 'Account Name',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 3,
            key: 'account_number',
            label: 'Account Number',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 4,
            key: 'allowable',
            label: 'Allowable',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 5,
            key: 'created_at',
            label: 'Created At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 6,
            key: 'updated_at',
            label: 'Updated At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 7,
            key: 'published_at',
            label: 'Published At',
            editRecord: false,
            viewRecord: false,
            type: 'text'
        },
        {
            id: 8,
            key: 'focus_setting',
            label: 'Focus #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        },
        {
            id: 9,
            key: 'ssoi_setting',
            label: 'SSOI #',
            editRecord: false,
            viewRecord: true,
            type: 'text'
        }
    ]
}

export default {
    UploadCOA,
    Focus,
    SSOI,
    TrialBalance,
    Users,
    ReviewCOA,
    FinalCOA
}