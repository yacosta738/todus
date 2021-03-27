package com.todus.service.mapper;

import com.todus.domain.*;
import com.todus.service.dto.CustomerDTO;
import java.util.Set;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Customer} and its DTO {@link CustomerDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class })
public interface CustomerMapper extends EntityMapper<CustomerDTO, Customer> {
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "followers", source = "followers", qualifiedByName = "idSet")
    CustomerDTO toDto(Customer s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CustomerDTO toDtoId(Customer customer);

    @Named("idSet")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    Set<CustomerDTO> toDtoIdSet(Set<Customer> customer);

    @Mapping(target = "removeFollower", ignore = true)
    Customer toEntity(CustomerDTO customerDTO);
}
