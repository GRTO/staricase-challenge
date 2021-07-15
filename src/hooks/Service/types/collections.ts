interface IndividualDTO {
  contact_points: {
    contact_point: Array<{
      contact_point_telephone: { value: string };
      email: string;
    }>;
  };
  name: {
    first: string;
    last: string;
  };
}

interface EmployerDTO {
  legal_entity: {
    full_name: string;
  };
}

interface ResidenceDTO {
  address: {
    addtional_line_text: string;
    city: string;
    country: string;
    line_text: string;
    postal_code: string;
    state: string;
  };
}

interface TaxpayerIdentifierDTO {
  value: string;
}

interface RoleDTO {
  borrower: {
    birth_date: string;
    residences: { residence: Array<ResidenceDTO> };
    employers: { employer: Array<EmployerDTO> };
  };
}

interface PartyDTO {
  customer_transaction_id: string;
  individual: IndividualDTO;
  roles: { role: Array<RoleDTO> };
  taxpayer_identifiers: { taxpayer_identifier: Array<TaxpayerIdentifierDTO> };
}

interface DealDTO {
  parties: {
    party: Array<PartyDTO>;
  };
}

export interface CollectionDTO {
  data: { deal_sets: Array<{ deal: DealDTO }>; document_sets: Object };
  metadata: {
    created_at: string;
    updated_at: string;
    validation: boolean;
    partner_name: string;
    dry_run: boolean;
    verification_state: string;
    results: Object;
  };
  transaction_id: string;
  collection_id: string;
}
