export const SCHEMA = {
  data: {
    deal_sets: {
      deal_set: [
        {
          deals: {
            deal: [
              {
                parties: {
                  party: [
                    {
                      customer_transaction_id:
                        "a499e10b-bfc7-46df-ba53-f5cccd964c57",
                      individual: {
                        contact_points: {
                          contact_point: [
                            {
                              contact_point_telephone: {},
                            },
                          ],
                        },
                        name: {
                          first: "John",
                          last: "Doe",
                        },
                      },
                      roles: {
                        role: [
                          {
                            borrower: {
                              employers: {},
                              residences: {},
                            },
                          },
                        ],
                      },
                      taxpayer_identifiers: {
                        taxpayer_identifier: [
                          {
                            value: "123-45-6789",
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    document_sets: {
      document_set: [
        {
          documents: {
            document: [
              {
                document_classification: {
                  document_classes: {
                    document_class: [
                      {
                        staircase_type: "string",
                        type: "VerificationOfEmloyment",
                      },
                    ],
                  },
                },
                foreign_objects: {
                  foreign_object: [
                    {
                      description: "string",
                      mime_type_identifier: "string",
                      name: "string",
                      staircase_blob_id: "string",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  metadata: {
    created_at: "03/03/2021, 8:24:04 AM EST",
    updated_at: "03/03/2021, 8:24:04 AM EST",
    validation: false,
    partner_name: "string",
    dry_run: false,
    verification_state: "IN_PROGRESS",
    results: {
      status: "COMPLETED",
      product: "Employments",
      info: "string",
    },
  },
};
